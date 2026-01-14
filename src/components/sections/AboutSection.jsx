import { Heart, Award, Coffee, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AboutSection = ({ translations }) => {
  const features = [
    {
      icon: Heart,
      title: translations.about.features.traditional.title,
      description: translations.about.features.traditional.description,
      gradient: 'linear-gradient(135deg, #FF1744, #F50057)',
    },
    {
      icon: Award,
      title: translations.about.features.quality.title,
      description: translations.about.features.quality.description,
      gradient: 'linear-gradient(135deg, #FFA726, #FF6F00)',
    },
    {
      icon: Coffee,
      title: translations.about.features.fresh.title,
      description: translations.about.features.fresh.description,
      gradient: 'linear-gradient(135deg, #731919, #E52B2B)',
    },
    {
      icon: Users,
      title: translations.about.features.family.title,
      description: translations.about.features.family.description,
      gradient: 'linear-gradient(135deg, #FF5722, #E91E63)',
    },
  ];

  return (
    <section className="h-full w-full overflow-y-auto py-12 md:py-16 px-4 md:px-6 pb-24 md:pb-16" style={{
      background: 'linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%)'
    }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{
              background: 'linear-gradient(135deg, #731919, #E52B2B, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {translations.about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {translations.about.description}
          </motion.p>
        </div>

        {/* Story Section */}
        <motion.div data-aos="fade-right" className="mb-8 md:mb-12">
          <Card className="border-2 shadow-xl" style={{
            background: 'linear-gradient(to bottom right, #FFFFFF, #FFF0F0)',
            borderColor: '#E52B2B'
          }}>
            <CardContent className="p-4 md:p-8">
              <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                {translations.about.story}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl shadow-lg" style={{ background: feature.gradient }}>
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <CardTitle className="text-base md:text-xl" style={{ color: '#731919' }}>
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;