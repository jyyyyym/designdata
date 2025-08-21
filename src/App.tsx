import React, { useState } from 'react';
import { Clock, MapPin, Phone, Mail, Heart, Star, Camera, Flower } from 'lucide-react';

const MemorialServiceBooking = () => {
  const [currentStep, setCurrentStep] = useState('home');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    serviceType: '',
    specialRequests: '',
    guestCount: 1
  });

  const services = [
    {
      id: 'basic',
      name: '기본 추모식',
      price: '150,000원',
      duration: '1시간',
      description: '소규모 가족 중심의 따뜻한 추모 서비스',
      features: ['온라인 영상 송출', '추모 영상 제작', '꽃꽂이 서비스', '추모록 작성']
    },
    {
      id: 'premium',
      name: '프리미엄 추모식',
      price: '300,000원',
      duration: '2시간',
      description: '전문 진행자와 함께하는 품격있는 추모 서비스',
      features: ['온라인 영상 송출', '전문 진행자', '추모 영상 제작', '라이브 음악 연주', '꽃꽂이 서비스', '추모록 작성', '추모품 제작']
    },
    {
      id: 'deluxe',
      name: '디럭스 추모식',
      price: '500,000원',
      duration: '3시간',
      description: '최고급 시설과 서비스로 진행되는 특별한 추모 서비스',
      features: ['온라인 영상 송출', '전문 진행자', '추모 영상 제작', '라이브 오케스트라', '프리미엄 꽃장식', '추모록 작성', '추모품 제작', '케이터링 서비스', '전용 VIP룸']
    }
  ];

  const testimonials = [
    {
      name: '김○○님',
      service: '프리미엄 추모식',
      rating: 5,
      comment: '멀리 계신 가족들도 온라인으로 함께 할 수 있어서 정말 감사했습니다. 진심이 담긴 서비스였어요.'
    },
    {
      name: '이○○님',
      service: '기본 추모식',
      rating: 5,
      comment: '따뜻하고 정성스러운 서비스에 마음이 위로가 되었습니다. 추천합니다.'
    },
    {
      name: '박○○님',
      service: '디럭스 추모식',
      rating: 5,
      comment: '모든 것이 완벽했습니다. 고인을 기리는 마음이 잘 전달된 의미있는 시간이었어요.'
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    handleInputChange('serviceType', service.name);
    setCurrentStep('booking');
  };

  const handleSubmitBooking = () => {
    setCurrentStep('confirmation');
  };

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Heart className="h-16 w-16 mx-auto text-rose-400 mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            소중한 추억을 <span className="text-rose-500">함께</span> 나누는 공간
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            온라인과 오프라인이 연결된 따뜻한 추모 서비스로<br />
            어디서나 마음을 모을 수 있습니다
          </p>
          <button
            onClick={() => setCurrentStep('services')}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            서비스 예약하기
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 text-gray-800">서비스 특징</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Camera className="h-12 w-12 mx-auto text-rose-400 mb-4" />
            <h3 className="text-xl font-medium mb-3 text-gray-800">온라인 실시간 송출</h3>
            <p className="text-gray-600">멀리 계신 가족, 친지들도 실시간으로 함께할 수 있습니다</p>
          </div>
          <div className="text-center p-6">
            <Flower className="h-12 w-12 mx-auto text-rose-400 mb-4" />
            <h3 className="text-xl font-medium mb-3 text-gray-800">전문적인 진행</h3>
            <p className="text-gray-600">경험 많은 전문 진행자가 품격있게 진행해드립니다</p>
          </div>
          <div className="text-center p-6">
            <Heart className="h-12 w-12 mx-auto text-rose-400 mb-4" />
            <h3 className="text-xl font-medium mb-3 text-gray-800">맞춤형 서비스</h3>
            <p className="text-gray-600">고인의 취향과 가족의 뜻을 반영한 개인 맞춤 서비스</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-gray-800">고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light mb-4 text-gray-800">추모 서비스 종류</h2>
        <p className="text-gray-600">소중한 분을 기리는 마음에 맞는 서비스를 선택해주세요</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">{service.name}</h3>
                <div className="text-3xl font-light text-rose-500 mb-1">{service.price}</div>
                <div className="text-gray-500 flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
              </div>
              
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => handleServiceSelect(service)}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
              >
                이 서비스 예약하기
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button
          onClick={() => setCurrentStep('home')}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← 홈으로 돌아가기
        </button>
      </div>
    </div>
  );

  const renderBooking = () => (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-2">예약 정보 입력</h2>
          <p className="text-gray-600">선택하신 서비스: <span className="font-medium text-rose-500">{selectedService?.name}</span></p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">예약자명 *</label>
              <input
                type="text"
                required
                value={bookingData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="성함을 입력해주세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">연락처 *</label>
              <input
                type="tel"
                required
                value={bookingData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="010-0000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">이메일 주소 *</label>
            <input
              type="email"
              required
              value={bookingData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="example@email.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">희망 날짜 *</label>
              <input
                type="date"
                required
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">희망 시간 *</label>
              <select
                required
                value={bookingData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="">시간 선택</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">예상 참석 인원</label>
            <input
              type="number"
              min="1"
              value={bookingData.guestCount}
              onChange={(e) => handleInputChange('guestCount', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="참석 예상 인원을 입력해주세요"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">특별 요청사항</label>
            <textarea
              value={bookingData.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
              placeholder="특별한 요청사항이 있으시면 자세히 적어주세요"
            />
          </div>

          <div className="border-t pt-6 flex gap-4">
            <button
              type="button"
              onClick={() => setCurrentStep('services')}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors"
            >
              이전으로
            </button>
            <button
              type="button"
              onClick={handleSubmitBooking}
              className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              예약 요청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500" />
          </div>
          <h2 className="text-2xl font-medium text-gray-800 mb-2">예약 요청이 접수되었습니다</h2>
          <p className="text-gray-600">24시간 내에 담당자가 연락드리겠습니다</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-left mb-6">
          <h3 className="font-medium text-gray-800 mb-4">예약 정보</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">서비스:</span>
              <span className="text-gray-800">{bookingData.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">예약자명:</span>
              <span className="text-gray-800">{bookingData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">연락처:</span>
              <span className="text-gray-800">{bookingData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">희망 일시:</span>
              <span className="text-gray-800">{bookingData.date} {bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">예상 인원:</span>
              <span className="text-gray-800">{bookingData.guestCount}명</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          <p>• 예약 확정은 담당자 상담 후 결정됩니다</p>
          <p>• 궁금한 사항은 언제든 연락 주세요</p>
        </div>

        <button
          onClick={() => {
            setCurrentStep('home');
            setSelectedService(null);
            setBookingData({
              name: '',
              phone: '',
              email: '',
              date: '',
              time: '',
              serviceType: '',
              specialRequests: '',
              guestCount: 1
            });
          }}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentStep('home')}
            >
              <Heart className="h-8 w-8 text-rose-500 mr-3" />
              <div>
                <h1 className="text-xl font-medium text-gray-800">추모와 함께</h1>
                <p className="text-xs text-gray-500">Memorial Together</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>02-0000-0000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@memorial.co.kr</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main>
        {currentStep === 'home' && renderHome()}
        {currentStep === 'services' && renderServices()}
        {currentStep === 'booking' && renderBooking()}
        {currentStep === 'confirmation' && renderConfirmation()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-rose-400 mr-2" />
                <h3 className="text-lg font-medium">추모와 함께</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                소중한 분을 기리는 마음을 온라인과 오프라인으로 연결하여 
                어디서나 함께할 수 있는 따뜻한 추모 서비스를 제공합니다.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">연락처</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>02-0000-0000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@memorial.co.kr</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>서울시 강남구 테헤란로 000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">운영시간</h4>
              <div className="text-sm text-gray-400">
                <p>평일: 09:00 - 18:00</p>
                <p>주말: 10:00 - 17:00</p>
                <p className="mt-2 text-xs">24시간 예약 접수 가능</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 추모와 함께. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MemorialServiceBooking;
