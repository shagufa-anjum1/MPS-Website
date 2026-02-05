import React, { useState } from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Input from '@components/Input/Input';
import Textarea from '@components/Textarea/Textarea';
import Button from '@components/Button/Button';
import { useApi } from '@hooks/useApi';
import contactService from '@services/contact.service';
import { ContactFormData } from '@types/index';
import { isValidEmail, isValidPhone, isRequired } from '@utils/validators';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '@utils/constants';

/**
 * Contact Page Component
 */
const Contact: React.FC = () => {
  const { loading, error, execute } = useApi<{ message: string }>();
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!isRequired(formData.name)) {
      errors.name = 'Name is required';
    }

    if (!isRequired(formData.email)) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!isRequired(formData.phone)) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!isRequired(formData.message)) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSuccessMessage('');

    const result = await execute(() => contactService.submitContactForm(formData));

    if (result) {
      setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: '',
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Let's discuss how we can help transform your business
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Have a question or want to discuss a project? We'd love to hear from you. Reach
                  out to us using the form or contact information below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaEnvelope className="text-2xl text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.EMAIL}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {CONTACT_INFO.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-2xl text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${CONTACT_INFO.PHONE}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {CONTACT_INFO.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-2xl text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{CONTACT_INFO.ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    {successMessage}
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={formErrors.name}
                    required
                    placeholder="John Doe"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={formErrors.email}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={formErrors.phone}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                  <Input
                    label="Company (Optional)"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div className="mb-6">
                  <Input
                    label="Subject (Optional)"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="mb-6">
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={formErrors.message}
                    required
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button type="submit" size="lg" loading={loading} className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
