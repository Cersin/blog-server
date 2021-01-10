module.exports = mongoose => {
    const Category = mongoose.model(
        "category",
        mongoose.Schema(
            {
                name: String
            }
        )
    );

    return Category;
};
