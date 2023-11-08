import Styles from "@/styles/ThanksCard.module.css";

export default function ThanksCard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardWrapper}>
        <div className={Styles.icon}></div>
        <h3>Thanks for subscribing!</h3>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com.</strong>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button>Dismiss message</button>
      </div>
    </div>
  );
}
