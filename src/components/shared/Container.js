const Container = ({children}) => {
    return (
        <div className = 'max-w-[2520px] text-white mx-auto lg:px-20 md:px-10 sm:px-2 px-4 bg-[#010313]' >
            {children}
        </div>
    );
};

export default Container;