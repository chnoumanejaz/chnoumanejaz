import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .coming-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          padding: 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .coming-card {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 50px 40px;
          max-width: 700px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .icon-wrapper {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .title {
          font-size: 42px;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .subtitle {
          color: #cbd5e1;
          font-size: 16px;
          margin-bottom: 40px;
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .time-box {
          background: #1e293b;
          padding: 20px;
          border-radius: 16px;
        }

        .time-value {
          display: block;
          font-size: 28px;
          font-weight: bold;
          color: #ffffff;
        }

        .time-label {
          font-size: 12px;
          text-transform: uppercase;
          color: #94a3b8;
        }

        .footer {
          font-size: 12px;
          color: #64748b;
        }
      `}</style>

      <div className="coming-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="coming-card"
        >
          <div className="icon-wrapper">🚀</div>

          <h1 className="title">We Are Launching Soon</h1>
          <p className="subtitle">
            Our website is under construction. We are preparing something
            amazing and exciting for you. Stay tuned.
          </p>

          {timeLeft && (
            <div className="countdown-grid">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="time-box">
                  <span className="time-value">{value}</span>
                  <span className="time-label">{unit}</span>
                </div>
              ))}
            </div>
          )}

          <p className="footer">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </motion.div>
      </div>
    </>
  );
}
