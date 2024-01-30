import './About.css';

export default function About() {
  return (
    <div className="about-container">
        <div className="about-info">
            <h2 className="about-name">Little Lemon</h2>
            <p className="about-location">Chicago</p>
            <p className="about-description">
            Welcome to Little Lemon, your go-to place for delightful dining in the heart of Chicago.
            Our passion is to serve you the finest culinary experiences, blending flavors and
            creating memories. Join us on a journey of taste and satisfaction.
            </p>
        </div>
        <div className="about-photos">
            <img
                className="about-photo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2P_6gnGsqWLuoqgsLM0DRaFUNXrF_OI0vC8P3UlnYA&s"
                alt="Adrian"
            />
            <img
                className="about-photo about-photo-mario"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2P_6gnGsqWLuoqgsLM0DRaFUNXrF_OI0vC8P3UlnYA&s"
                alt="Mario"
            />
        </div>
    </div>
  )
}
