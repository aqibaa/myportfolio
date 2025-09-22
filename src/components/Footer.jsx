import { ArrowUp, Github, Instagram, Linkedin,  } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className='bg-card border-t border-border px-4 pt-12 text-muted-foreground'>
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-8 text-center md:text-center">
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground text-left">AqibCode.co</h3>
            <p className="text-sm text-left">
              Crafting digital experiences, one line of code at a time. Thank you for visiting!
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
            <div className="flex justify-center md:justify-center space-x-4">
              <a href="https://github.com/aqibaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/aaqib-aarif/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://instagram.com//aaqib.aarif/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border py-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className='text-sm text-center'>
            &copy; {new Date().getFullYear()} AqibCodes.co. All rights reserved.
          </p>
          <a 
            href="#hero" 
            aria-label="Scroll to top"
            className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:-translate-y-1'
          >
            <ArrowUp size={20}/>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;