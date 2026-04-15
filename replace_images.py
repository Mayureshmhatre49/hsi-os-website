import re

with open('projects.html', 'r') as f:
    text = f.read()

# Replace specifically the instances in projects.html
text = text.replace('src="hero-banner.png" alt="Casa Frangipani"', 'src="projects-casa-frangipani-1.jpg" alt="Casa Frangipani" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Serenity Villa"', 'src="projects-casa-frangipani-2.jpg" alt="Serenity Villa" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Villa Rughani"', 'src="projects-casa-frangipani-3.jpg" alt="Villa Rughani" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Villa Blue Haven"', 'src="projects-casa-frangipani-1.jpg" alt="Villa Blue Haven" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Villa Bellissimo"', 'src="projects-casa-frangipani-2.jpg" alt="Villa Bellissimo" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Villa Vayu"', 'src="projects-casa-frangipani-3.jpg" alt="Villa Vayu" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="Villa Awas"', 'src="projects-casa-frangipani-1.jpg" alt="Villa Awas" loading="lazy"')
text = text.replace('src="hero-banner.png" alt="HSI Premium Project Experience"', 'src="projects-casa-frangipani-1.jpg" alt="HSI Premium Project Experience" loading="lazy"')

with open('projects.html', 'w') as f:
    f.write(text)

# And now index.html hero banner
with open('index.html', 'r') as f:
    text = f.read()
text = text.replace("url('hero-banner.png')", "url('projects-casa-frangipani-1.jpg')")

with open('index.html', 'w') as f:
    f.write(text)

print("Images replaced.")
