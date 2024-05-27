
const SectionTitle = ({heading,SubHeading}) => {
    return (
        <div className="w-1/3 border-b-4 border-orange-500 text-orange-500 text-center mx-auto mb-20">
            <h1 className="font-bold text-3xl uppercase ">{heading}</h1>
            <p className="font-semibold">{SubHeading}</p>
        </div>
    );
};

export default SectionTitle;