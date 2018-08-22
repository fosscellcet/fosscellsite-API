module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("Blog",{
        id : {
            type : DataTypes.INTEGER(),
            autoIncrement : true,
            primaryKey : true
        },
        title : {
            type : DataTypes.STRING(),
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT(),
            allowNull : false
        },
        author : {
            type : DataTypes.STRING(),
            allowNull : false
        },
        date : {
            type : DataTypes.DATEONLY(),
            allowNull: false
        }
    });
    return Blog;
}