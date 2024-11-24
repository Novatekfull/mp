import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_name: "NaturePaysage",
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!, // Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY! // Public Key
      );

      if (response.status === 200) {
        toast.success("Message envoyé avec succès !");
        reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    }
  };
  return (
    <div className="py-16">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour réaliser vos projets d'aménagement
            paysager
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "Le prénom est requis",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 ${
                      errors.firstName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-lime-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", { required: "Le nom est requis" })}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 ${
                      errors.lastName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-lime-500"
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-lime-500"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Le numéro de téléphone est requis",
                    pattern: {
                      value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                      message: "Numéro de téléphone invalide",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-lime-500"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: "Le message est requis",
                    minLength: {
                      value: 10,
                      message:
                        "Le message doit contenir au moins 10 caractères",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-lime-500"
                  }`}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-lime-500 text-white px-6 py-3 rounded-md hover:bg-lime-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-lime-500 mr-4" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">06 84 40 35 77</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-lime-500 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">paysage.maillard@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-lime-500 mr-4" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">01160 Priay</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-lime-500 mr-4" />
                  <div>
                    <p className="font-medium">Horaires d'ouverture</p>
                    <p className="text-gray-600">Lun - Ven: 9h - 18h</p>
                    <p className="text-gray-600">Sam: 9h - 12h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
