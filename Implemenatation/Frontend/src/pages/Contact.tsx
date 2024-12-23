import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Simulate form submission
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567' },
            { icon: Mail, title: 'Email', info: 'support@skywings.com' },
            { icon: MapPin, title: 'Address', info: '123 Aviation Way, NY 10001' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-background-lighter p-6 rounded-lg text-center"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-muted">{item.info}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={5}
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};