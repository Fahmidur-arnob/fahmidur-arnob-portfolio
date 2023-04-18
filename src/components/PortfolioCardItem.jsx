import React from 'react';

function PortfolioCardItem({ title, img_url, stack, link, client_side_code, server_side_code }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
            <h3 className="text-lg md:text-sm dark:text-white ms-4 mb-2 md:mb-3 font-semibold ">{client_side_code}</h3>
            <h3 className="text-lg md:text-sm dark:text-white ms-4 mb-2 md:mb-3 font-semibold ">{server_side_code}</h3>
        </a>
    )
}

export default PortfolioCardItem;