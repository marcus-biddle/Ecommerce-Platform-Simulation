import { BannerButton } from "./styled";


export const Banner = () => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2>Free Standard Shipping Over $1000</h2>
            <span>Not a member? Join today for more rewards!</span>
        </BannerButton>
    )
};