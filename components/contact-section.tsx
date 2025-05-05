"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, LinkedinIcon, SendIcon } from "lucide-react"
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "yeJEc8GsZkwnxzAPw"
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Send email using EmailJS
    emailjs.send(
      'service_nxun1x7', // Replace with your EmailJS service ID
      'template_s7cyv3b', // Replace with your EmailJS template ID
      {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
      },
      'yeJEc8GsZkwnxzAPw' // Your EmailJS public key
    )
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-800">Get In Touch</h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-purple-600" />
                <a
                  href="mailto:rustam111@gmail.com"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  rustam111@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-purple-600" />
                <a href="tel:+919999058758" className="text-gray-700 hover:text-purple-600 transition-colors">
                  +91 9999058758
                </a>
              </div>
              <div className="flex items-center">
                <LinkedinIcon className="h-5 w-5 mr-3 text-purple-600" />
                <a
                  href="https://linkedin.com/in/rustam-hayat-khan-704532234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  linkedin.com/in/rustam-hayat-khan-704532234
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always interested in discussing new projects, challenges, and opportunities in the HVAC engineering
                field.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <SendIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <Button className="mt-6 bg-purple-600 hover:bg-purple-700" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    rows={5}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
