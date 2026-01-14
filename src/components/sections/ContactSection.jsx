import { useState } from "react";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

// TikTok SVG icon component (accepts className like lucide icons)
const TikTokIcon = ({ className = "h-4 w-4", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M9 0h1.5c.1 1.2.7 2.2 1.6 3.1.9.9 1.9 1.4 3 1.6V9c-1.8 0-3.4-.6-4.6-1.7V11c0 3-2.1 5-5.1 5C2.7 16 0 13.8 0 10.8 0 7.9 2.3 5.6 5.2 5.6c.4 0 .8.1 1.2.2v2.7c-.4-.1-.7-.2-1.1-.2-1.3 0-2.4 1.1-2.4 2.5 0 1.5 1.1 2.6 2.6 2.6 1.5 0 2.5-1 2.5-2.8V0z" />
  </svg>
);

const ContactSection = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(translations.contact.form.success, {
      description: translations.contact.form.successDescription,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: translations.contact.info.address,
      content: "Rheinstraße 32–33, 12161 Berlin",
      gradient: "linear-gradient(135deg, #E91E63, #F06292)",
    },
    {
      icon: Phone,
      title: translations.contact.info.phone,
      content: "+49 (030) 276 95744",
      gradient: "linear-gradient(135deg, #FF6F00, #FFA726)",
    },
    {
      icon: Clock,
      title: translations.contact.info.hours,
      content: translations.contact.info.hoursValue,
      gradient: "linear-gradient(135deg, #FFA726, #FFB74D)",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@bosnabaeckerei",
      link: "https://instagram.com/bosnabaeckerei",
      gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
    },
    {
      icon: TikTokIcon,
      title: "TikTok",
      content: "@bosnabaeckerei",
      link: "https://www.tiktok.com/@bosnabaeckerei",
      gradient: "linear-gradient(135deg, #111827, #374151)",
    },
    
  ];

  return (
    <section
      className="h-full w-full overflow-y-auto py-12 md:py-16 px-4 md:px-6 pb-24 md:pb-16"
      style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{
              background: "linear-gradient(135deg, #731919, #E52B2B, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {translations.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground"
          >
            {translations.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-3 md:space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  whileHover={{ x: 10 }}
                >
                  <Card className="bg-white hover:shadow-xl transition-all">
                    <CardHeader className="p-3 md:p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 md:p-3 rounded-xl shadow-lg"
                          style={{ background: info.gradient }}
                        >
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>

                        <div>
                          <CardTitle className="text-sm md:text-base" style={{ color: "#731919" }}>
                            {info.title}
                          </CardTitle>

                          <CardDescription className="text-foreground font-medium text-xs md:text-sm">
                            {info.link ? (
                              <a
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors"
                                style={{ color: "#E52B2B" }}
                              >
                                {info.content}
                              </a>
                            ) : (
                              info.content
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div data-aos="fade-left">
            <Card className="bg-white shadow-xl">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl" style={{ color: "#731919" }}>
                  {translations.contact.form.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-xs md:text-sm">
                  {translations.contact.form.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 md:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder={translations.contact.form.name}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-10 md:h-11 border-2 text-sm"
                      style={{ borderColor: "#E52B2B" }}
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={translations.contact.form.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-10 md:h-11 border-2 text-sm"
                      style={{ borderColor: "#E52B2B" }}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder={translations.contact.form.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="border-2 resize-none text-sm"
                      style={{ borderColor: "#E52B2B" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="default"
                    className="w-full text-white shadow-lg hover:shadow-xl transition-all text-sm md:text-base py-5"
                    style={{ background: "linear-gradient(135deg, #731919, #E52B2B)" }}
                  >
                    {translations.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
