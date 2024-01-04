const tools = {
  scroll: `
        /* width */
        ::-webkit-scrollbar {
            display: block !important;
            width: 10px !important;
            height: 100% !important;

            border-radius: 0 4px 4px 0;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            display: block !important;
            border-radius: 0 4px 4px 0;
            
            background-color: #f1f1f1 !important;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            display: block !important;
            border-radius: 0 4px 4px 0;

            background-color: #888 !important;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            display: block !important;
            
            background-color: #555 !important;
        }
    `,
  noScroll: `
        scrollbar-width: none;
        --ms-overflow-style: none;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        
        /* width */
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            display: none !important;
            width: 10px !important;
            height: 100% !important;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            display: none !important;
            width: 0;
            height: 0;
            background-color: transparent !important;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            display: none !important;

            background-color: transparent !important;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            display: none !important;
            
            background-color: transparent !important;
        }
    `,
};

export default tools;
