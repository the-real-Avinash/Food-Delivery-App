import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Order</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>2327843674675</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>
                  25 LA wiston street Los angles
                </span>
              </td>

              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" height="30" width="30" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" height="30" width="30" />
            <span>Prepering</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" height="30" width="30" />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" height="30" width="30" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            {" "}
            PAID!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
