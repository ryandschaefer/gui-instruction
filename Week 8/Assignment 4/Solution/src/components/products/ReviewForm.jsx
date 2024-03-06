import { useState } from "react";
// import { TextField, SelectField, TextAreaField } from "../common";
import { TextField, Select, MenuItem } from "@mui/material"
import { ProductReview } from "../../models";
import { Rating } from "../common";

export const ReviewForm = ({ onReviewAdded }) => {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [ratingOptions] = useState([
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
    ]);

    return (
        <>
            <div className = "card">
                <h2 className = "card-header">
                    Add Review
                </h2>
                <div className = "container card-body">
                    <form>
                        <div className = "row justify-content-between">
                            <div className = "col-6">
                                <TextField
                                    id = "name"
                                    label = "Name"
                                    name = "name"
                                    value = { userName }
                                    onChange = { event => setUserName(event.target.value) }
                                    fullWidth
                                />
                            </div>
                            <div className = "col-2">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id = "rating"
                                    value = { rating }
                                    label = "Rating"
                                    onChange = { event => setRating(event.target.value) } 
                                >
                                    {
                                        ratingOptions.map(x => (
                                            <MenuItem value = { x.value }>{ x.label }</MenuItem>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className = "col-4 align-self-center">
                                <Rating 
                                    value = { rating }
                                /> 
                            </div>
                        </div>
                        <br/>
                        <div className = "row">
                            <TextField
                                id = "comment"
                                label = "Comment"
                                name = "comment"
                                value = { comment }
                                onChange = { event => setComment(event.target.value) }
                                multiline
                            />
                        </div>
                        <br/>
                        <div className = "text-center">
                            <button 
                                type = "button"
                                className = "btn btn-primary"
                                onClick = {() => {
                                    onReviewAdded(new ProductReview(userName, rating, comment, new Date().toDateString()));
                                    setUserName("");
                                    setRating("");
                                    setComment("");
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}