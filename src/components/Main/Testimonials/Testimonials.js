import './Testimonials.css';

const testimonialsData = [
    {
      id: 1,
      rating: 5.0,
      user: 'John Doe',
      photoUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png',
      review: 'Amazing experience! The food was delicious, and the service was excellent.',
    },
    {
      id: 2,
      rating: 4.3,
      user: 'Jane Smith',
      photoUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png',
      review: 'Great atmosphere and friendly staff. The lemonade is a must-try!',
    }
  ];

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">Testimonials</h2>
      <div className="testimonials-row">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-container">
            <div className="rating">{testimonial.rating} of 5.0</div>
            <div className="user-profile">
              <img src={testimonial.photoUrl} alt={testimonial.user} className="user-photo" />
              <p className="user-name">{testimonial.user}</p>
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
