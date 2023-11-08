import styles from "@/styles/SubscribeCard.module.css";
import { useContext } from "react";
import { UserContext } from "../index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Vaild Email Required")
    .required("Vaild Email Required"),
});

export default function SubscribeCard() {
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: any) => {
    setUser({ email: data.email });
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardForm}>
          <div className={styles.cardFormWrapper}>
            <h2>Stay updated!</h2>
            <span>
              Join 60,000+ product managers receiving monthly updates on:
            </span>
            <div className={styles.features}>
              <span>Product discovery and building what matters</span>
              <span>Measuring to ensure updates are a success</span>
              <span>And much more!</span>
            </div>
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className={"flex justify-between items-center w-full mb-1"}>
                <label>Email address</label>
                <span className={styles.errorMessage}>
                  {errors.email?.message}
                </span>
              </div>
              <input
                {...register("email")}
                type="text"
                placeholder="email@company.com"
                className={`${
                  errors.email?.message ? styles.errorInputStyle : ""
                }`}
              />
              <button type="submit" onSubmit={onSubmitHandler}>
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <div className={styles.cardImage}>
          <div className={styles.ImageWrapper}></div>
        </div>
      </div>
    </div>
  );
}
