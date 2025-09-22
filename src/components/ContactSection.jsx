// import {
//   Github,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitch,
//   Twitter,
// } from "lucide-react";
// import { cn } from "../lib/utlis";
// import { useToast } from "../hooks/use-toast";
// import { useState } from "react";
// import emailjs from '@emailjs/browser';

// const ContactSection = () => {
//   const { toast } = useToast();

//   // --- START: ADDED CODE ---

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   // 2. State to handle the submission status (e.g., to show "Sending...")
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // 3. State for showing a success or error message after submission
//   const [statusMessage, setStatusMessage] = useState('');

//   // 4. Handle input changes and update the state
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // 5. Handle the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents the page from reloading
//     setIsSubmitting(true); // Disable button and show "Sending..."
//     setStatusMessage(''); // Clear any previous status message


//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       message: formData.message,
//     };


//     const serviceID = 'service_sd86sid'; // <-- 🚨 REPLACE
//     const publicKey = 'hwxfEKQIYmkV6sL8H'; // <-- 🚨 REPLACE

//     const sendNotification = emailjs.send(
//       serviceID,
//       'template_4bgasxg', 
//       templateParams,
//       publicKey
//     );


//     const sendAutoReply = emailjs.send(
//       serviceID,
//       "auto_reply_template",  
//       templateParams,
//       publicKey
//     );
//     Promise.all([sendNotification, sendAutoReply])
//       .then((responses) => {
//         console.log('EMAILS SENT SUCCESSFULLY!', responses);
//         setStatusMessage('Message sent successfully! A confirmation has been sent to your email.');
//         toast({ // Using your toast hook for success
//           title: "Success!",
//           description: "Your message has been sent.",
//         });
//         setFormData({ name: '', email: '', message: '' }); // Reset the form fields

//         setTimeout(() => {
//           setStatusMessage('');
//         }, 5000);
//       })
//       .catch((err) => {
//         console.error('FAILED TO SEND EMAILS...', err);
//         setStatusMessage('Failed to send message. Please try again.');
//         toast({ // Using your toast hook for error
//           title: "Error",
//           description: "Something went wrong. Please try again.",
//           variant: "destructive",
//         });
//       })
//       .finally(() => {
//         setIsSubmitting(false); // Re-enable the button
//       });
//   };

//   // --- END: ADDED CODE ---

//   return (
//    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//   <div className="container mx-auto max-w-5xl">
//     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//       Get In <span className="text-primary"> Touch</span>
//     </h2>

//     <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//       Have a project in mind or want to collaborate? Feel free to reach out.
//       I'm always open to discussing new opportunities.
//     </p>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//       <div className="space-y-8 flex flex-col items-center md:items-start">


//         <h3 className="text-2xl font-semibold"> 
//           Contact Information
//         </h3>


//         <div className="flex flex-col items-center space-y-8 sm:items-start">


//           <div className="flex items-center gap-4">
//             <div className="p-3 rounded-full bg-primary/10">
//               <Mail className="h-6 w-6 text-primary" />
//             </div>
//             <div className="flex flex-col items-start">
//               <h4 className="font-medium"> Email</h4>
//               <a
//                 href="mailto:aaqib.codes@gmail.com"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 aaqib.codes@gmail.com
//               </a>
//             </div>
//           </div>

//           {/* Doosra Item: Phone */}
//           <div className="flex items-center gap-4">
//             <div className="p-3 rounded-full bg-primary/10">
//               <Phone className="h-6 w-6 text-primary" />
//             </div>
//             <div className="flex flex-col items-start">
//               <h4 className="font-medium"> Phone</h4>
//               <a
//                 href="tel:+923234254135"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 +92 (323) 425-4315
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="p-3 rounded-full bg-primary/10">
//               <MapPin className="h-6 w-6 text-primary" />
//             </div>
//             <div className="flex flex-col items-start">
//               <h4 className="font-medium"> Location</h4>
//               <a className="text-muted-foreground hover:text-primary transition-colors">
//                 Lahore, Pakistan
//               </a>
//             </div>
//           </div>

//         </div>

//         <div className="pt-8">
//           <h4 className="font-medium mb-4"> Connect With Me</h4>
//           <div className="flex space-x-4 justify-center">
//             <a href="https://www.linkedin.com/in/aaqib-aarif/" target="_blank">
//               <Linkedin />
//             </a>
//             <a href="https://github.com/aqibaa" target="_blank">
//               <Github />
//             </a>
//             <a  href="https://instagram.com//aaqib.aarif/"  target="_blank">
//               <Instagram />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         className="bg-card p-8 rounded-lg shadow-xs"
//       >
//         <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium mb-2"
//             >
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//               placeholder="Muhammad Aaqib..."
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium mb-2"
//             >
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//               placeholder="john@gmail.com"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium mb-2"
//             >
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows={4}
//               className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//               placeholder="Hello, I'd like to talk about..."
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={cn(
//               "cosmic-button w-full flex items-center justify-center gap-2"
//             )}
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//             {!isSubmitting && <Send size={16} />}
//           </button>
//           {statusMessage && <p className="text-center text-sm mt-4">{statusMessage}</p>}
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// };
// export default ContactSection;



import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utlis";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };


    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notificationTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendNotification = emailjs.send(
      serviceID,
      notificationTemplateID,
      templateParams,
      publicKey
    );

    const sendAutoReply = emailjs.send(
      serviceID,
      autoReplyTemplateID,
      templateParams,
      publicKey
    );

    Promise.all([sendNotification, sendAutoReply])
      .then((responses) => {
        console.log('EMAILS SENT SUCCESSFULLY!', responses);
        setStatusMessage('Message sent successfully! A confirmation has been sent to your email.');
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED TO SEND EMAILS...', err);
        setStatusMessage('Failed to send message. Please try again.');
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>
            <div className="flex flex-col space-y-8 sm:items-start">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:aaqib.codes@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aaqib.codes@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+923234254135"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 (323) 425-4315
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lahore, Pakistan
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/aaqib-aarif/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/aqibaa" target="_blank">
                  <Github />
                </a>
                <a href="https://instagram.com//aaqib.aarif/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                placeholder="Muhammad Aaqib..."
              />
            </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </button>
              {statusMessage && <p className="text-center text-sm mt-4">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;