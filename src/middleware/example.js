export default (req, res, next) => {
    console.log("A request was made");
    next();
}