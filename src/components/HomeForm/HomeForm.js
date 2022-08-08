import React from 'react';

const HomeForm = () => {
    return (
        <div className="HomeForm py-5">
            <div className="inner__homeForm container mx-auto">
                <div className="homeForm__content bg-neutral w-4/5 mx-auto p-10 rounded-lg mt-[-115px]">
                    <h3 className="text-2xl text-primary capitalize font-semibold">Get your estimate</h3>
                    <div className="home__form__container mt-5">
                        <form className="flex flex-row flex-wrap gap-2">
                            <div className="home__form__inputs">
                                <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="number" placeholder="Your Number" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="text" placeholder="Type of cleaing" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="text" placeholder="Number of Bedrooms" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="text" placeholder="Number of Bathrooms" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="text" placeholder="Frequency of cleaning" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="home__form__inputs">
                                <input type="submit" value="Submit" class="input input-bordered w-full max-w-xs bg-primary text-white mt-5 pointer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeForm;