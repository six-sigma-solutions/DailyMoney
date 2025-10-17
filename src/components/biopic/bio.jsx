import React from 'react';
import './bio.css'; // This line imports your CSS styles

function Bio() {
  return (
    <div className="bio-page-container">
      {/* ================== TOP FOUNDER SECTION ================== */}
      <div className="founder-header">
            <h1>Choose your Path, Travel with us, Lead a Healthy-Happy-Wealthy-Heaven Life.</h1>
            </div>
      <div className="founder-section">
        <div className="founder-profile">
          <img 
            src="sir.png" 
            alt="Founder's Photo" 
          />
          <h1>Dr.V.Chellapondy</h1>
        </div>
        <hr />
        <a 
          href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/"
          target="_blank" 
          rel="noopener noreferrer"
          className="team-member-link"
        >
            <span className="founder-slogan">My job is - changing people's life.</span>
            {/* Icon Changed to Upward Arrow */}
            <div className="pointing-icon">👆</div>
        </a>
      </div>

      {/* ================== TWO-PART TEAM SECTION ================== */}
      <div className="team-container">
        
        {/* First Person Card */}
        <div className="team-member">
          <div className="profile">
            <img 
              src="person-1.jpg" 
              alt="Team Member 1" 
            />
            <h2>S.Vasu</h2>
          </div>
          <a 
          href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/"
          target="_blank" 
          rel="noopener noreferrer"
          className="team-member-link"
          >
            <span className="slogan">My Health is My Wealth.</span>
            {/* Icon Changed to Upward Arrow */}
            <div className="pointing-icon">👆</div>
          </a>
        </div>

        {/* Second Person Card */}
        <div className="team-member">
          <div className="profile">
            <img 
              src="person2.PNG" 
              alt="Team Member 2" 
            />
            <h2>R.K.Selvamani</h2>
          </div>
          <a 
          href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/"
          target="_blank" 
          rel="noopener noreferrer"
          className="team-member-link"
          >
            <span className="slogan">My World - My Children.</span>
            {/* Icon Changed to Upward Arrow */}
            <div className="pointing-icon">👆</div>
          </a>
        </div>

        {/* ... (The rest of your JSX remains the same, just ensure all '👇' are changed to '👆') ... */}
        {/* I've updated the rest for you below */}
        
        <div className="team-member">
          <div className="profile">
            <img src="person3.jpg" alt="Team Member 2" />
            <h2>C.Arvind</h2>
          </div>
          <a href="https://arvindc.herbalife.com/en-us/u" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">I want to became Entrepreneur.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="person4.jpg" alt="Team Member 1" />
            <h2>Dr.K.P.Kosygan</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">I'm Forever a Student.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">My wellness journey begins Now.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Look Good Feel Good.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="dhanush.jpg" alt="Team Member 1"/>
            <h2>Dhanush A V</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">My Healthy weight loss journey starts Now.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="kisore.jpg" alt="Team Member 2"/>
            <h2>Kishore K</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Slim, Fit, and full of Energy.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="ai.jpg" alt="Team Member 2"/>
            <h2>Jeganraj A</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Healthy living happy living.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="sathish.jpg" alt="Team Member 1"/>
            <h2>Sathish M</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Choosing health and happiness every day.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="raju.jpg" alt="Team Member 2"/>
            <h2>Ilayaraju C</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Small steps lead to big changes.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="baskar.jpg" alt="Team Member 2"/>
            <h2>Baskar U</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Positive changes lead to powerful results.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">My children health is more important for me.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Healthy habits, happy life.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Eat well, feel great.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Your body is your home.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Choose health every day.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">A new day for your health.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Active life, happy life.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">A healthy choice is a happy choice.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Good health is true wealth.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">A small step for health is a big step for life.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">Your health is an investment, not an expense.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>
        <div className="team-member">
          <div className="profile">
            <img src="https://placehold.co/100x100/EFEFEFF/grey?text=Member" alt="Team Member 2"/>
            <h2>X X X X</h2>
          </div>
          <a href="https://cpdian.goherbalife.com/Catalog/Home/Index/en-IN/" target="_blank" rel="noopener noreferrer" className="team-member-link">
            <span className="slogan">One healthy choice at a time.</span>
            <div className="pointing-icon">👆</div>
          </a>
        </div>

        <div className="card-footer-bg">
            <div className="footer-logo-container">
                <img
                    src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png" 
                    alt="DailyMoney Logo"
                    className="footer-logo"
                />
            </div>
            <h1 className="footer-title2">
                DAILY MONEY
            </h1>
            <p className="footer-subtitle2">
                Independent for Entire Life
            </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
