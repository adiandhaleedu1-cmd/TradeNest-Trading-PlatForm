import { model } from "mongoose";
import { OrderSchema } from "../schemas/OrderSchema";

const OrderModel = new model("Order", OrderSchema);

export default OrderModel ;