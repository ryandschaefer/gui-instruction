import { useContext } from "react";
import { CartContext } from "../../context";

export const MyCart = () => {

    const cart = useContext(CartContext);
    let total = 0;

    return <>
        <br/>
        <table className = "table table-striped table-condensed">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th className = "text-end">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.cart.items.map((item, index) => {
                        total += item.totalPrice;
                        return (
                            <tr key = { index }>
                                <td>{ item.quantity }</td>
                                <td>{ item.product.name } - <span className = "text-secondary">${ item.product.price }/each</span></td>
                                <td className = "text-end">${ item.totalPrice }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan = "3" className = "text-end border-bottom-0">${ total }</th>
                </tr>
            </tfoot>
        </table>
    </>
}