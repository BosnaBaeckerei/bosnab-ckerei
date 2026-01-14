import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { galleryImages } from '@/data/gallery';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = ({ translations }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="h-full w-full overflow-y-auto py-12 md:py-16 px-4 md:px-6 pb-24 md:pb-16" style={{
      background: 'linear-gradient(to bottom, #F8F9FA 0%, #FFFFFF 100%)'
    }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{
              background: 'linear-gradient(135deg, #731919, #E52B2B, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {translations.gallery.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground"
          >
            {translations.gallery.subtitle}
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-end justify-center p-3"
                style={{ background: 'linear-gradient(to top, rgba(115, 25, 25, 0.9), transparent)' }}
              >
                <span className="text-white font-semibold text-xs md:text-sm">
                  {translations.gallery.view}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.img
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;