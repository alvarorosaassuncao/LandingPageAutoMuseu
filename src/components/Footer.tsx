import React from 'react';
import { Car, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-orange-500 mr-3" />
              <span className="text-2xl font-bold">
                AutoMuseu<span className="text-orange-500">+</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Conectando gerações através da paixão por automóveis. 
              Do clássico Fusca aos modernos elétricos, celebramos 
              a evolução automotiva brasileira e mundial.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Como Funciona</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Modelos Clássicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Inovações Atuais</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Galeria HD</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-orange-500" />
                <span>contato@automuseu.com.br</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-orange-500" />
                <span>(11) 9999-8888</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-orange-500 mt-1" />
                <span>São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AutoMuseu+. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;