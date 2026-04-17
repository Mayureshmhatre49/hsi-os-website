const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

async function testEmail() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

  console.log('--- SMTP Configuration Test ---');
  console.log(`Host: ${smtpHost}`);
  console.log(`Port: ${smtpPort}`);
  console.log(`User: ${smtpUser}`);
  console.log(`Pass: ${smtpPass ? '********' : '(not set)'}`);

  if (!smtpUser || !smtpPass) {
    console.error('\nError: SMTP_USER or SMTP_PASS is not defined in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: true },
  });

  try {
    console.log('\nConnecting to SMTP server...');
    await transporter.verify();
    console.log('✅ Connection verified successfully!');

    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: `"HSIOS Test" <${smtpUser}>`,
      to: smtpUser, // Send to self
      subject: 'HSIOS SMTP Test Mail',
      text: 'If you receive this, your SMTP configuration for HSIOS is working correctly!',
      html: '<b>If you receive this, your SMTP configuration for HSIOS is working correctly!</b>',
    });

    console.log(`✅ Message sent: ${info.messageId}`);
    console.log('Check your inbox!');
  } catch (error) {
    console.error('\n❌ SMTP new Error:');
    console.error(error);
  }
}

testEmail();
