import styles from "./OrderData.module.css";

const orders = [
  {
    id: "#9812",
    items: "5 Items",
    paymentStatus: "Paid",
    paymentClass: styles.paid, // Green
    customer: "Jenny Wilson",
    date: "Jan 2, 2024",
    orderStatus: "Shipped",
    orderClass: styles.shipped, // Blue
    total: "$4,830",
    deliveryDate: "Jan 12, 2024",
  },
  {
    id: "#9974",
    items: "9 Items",
    paymentStatus: "Unpaid",
    paymentClass: styles.unpaid, // Grey
    customer: "Ronald Richards",
    date: "Jan 7, 2024",
    orderStatus: "On hold",
    orderClass: styles.onHold, // Beige
    total: "$8,600",
    deliveryDate: "-",
  },
  {
    id: "#9781",
    items: "3 Items",
    paymentStatus: "Paid",
    paymentClass: styles.paid, // Grey
    customer: "Floyd Miles",
    date: "Dec 30, 2023",
    orderStatus: "Delivered",
    orderClass: styles.delivered, // Beige
    total: "$3,200",
    deliveryDate: "Jan 1 2024",
  },
  {
    id: "#9421",
    items: "2 Items",
    paymentStatus: "Unpaid",
    paymentClass: styles.unpaid, // Grey
    customer: "Guy Hawkins",
    date: "Nov 28, 2023",
    orderStatus: "On hold",
    orderClass: styles.onHold, // Beige
    total: "$6,900",
    deliveryDate: "-",
  },
  {
    id: "#9367",
    items: "15 Items",
    paymentStatus: "Refunded",
    paymentClass: styles.refunded, // Grey
    customer: "Ranette Black",
    date: "Oct 20, 2023",
    orderStatus: "Cancelled",
    orderClass: styles.refunded, // Beige
    total: "$12,500",
    deliveryDate: "-",
  },
  {
    id: "#9234",
    items: "6 Items",
    paymentStatus: "Paid",
    paymentClass: styles.paid, // Grey
    customer: "Savannah Nguyen",
    date: "Sept 17, 2023",
    orderStatus: "Delivered",
    orderClass: styles.onHold, // Beige
    total: "$4,150",
    deliveryDate: "Oct 14, 2023",
  },
  {
    id: "#9024",
    items: "1 Items",
    paymentStatus: "Paid",
    paymentClass: styles.paid, // Grey
    customer: "Bessie Cooper",
    date: "Sept 12, 2023",
    orderStatus: "Delivered",
    orderClass: styles.delivered, // Beige
    total: "$1,000",
    deliveryDate: "Sep 18, 2023",
  },
  {
    id: "#8291",
    items: "2 Items",
    paymentStatus: "Refunded",
    paymentClass: styles.refunded, // Grey
    customer: "Favour Dumnoi",
    date: "Aug 20, 2023",
    orderStatus: "Cancelled",
    orderClass: styles.refunded, // Beige
    total: "$1,550",
    deliveryDate: "-",
  },
  {
    id: "#8234",
    items: "4 Items",
    paymentStatus: "Refunded",
    paymentClass: styles.paid, // Grey
    customer: "Cameron Williamson",
    date: "Aug 2, 2023",
    orderStatus: "Delivered",
    orderClass: styles.delivered, // Beige
    total: "$2,730",
    deliveryDate: "Aug 22, 2023",
  },
  {
    id: "#8231",
    items: "2 Items",
    paymentStatus: "Paid",
    paymentClass: styles.paid, // Grey
    customer: "Robor Esiolee",
    date: "Jul 8, 2023",
    orderStatus: "Delivered",
    orderClass: styles.delivered, // Beige
    total: "$840",
    deliveryDate: "Jul 15, 2023",
  },
];

export default orders;
