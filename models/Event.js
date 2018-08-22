module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('events',{
        id : {
            type : DataTypes.INTEGER(),
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING(),
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT(),
            allowNull : false
        },
        date : {
            type : DataTypes.DATEONLY(),
            allowNull : false
        },
        venue : {
            type : DataTypes.STRING(),
            allowNull : false
        }
    });
    return Event;
}