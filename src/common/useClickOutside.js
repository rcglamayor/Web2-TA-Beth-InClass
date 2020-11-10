import { useEffect } from "react";

/**
 * Hook that triggers callback when user clicks outside of the passed ref
 * @constant {ReactDomRef} ref React.ref of a dom element to click outside
 * @constant {method} onClickOutside call back method to fire when clicking outside of selectors
 * @constant {array} ignoredDomSelectors array of dom CSS selectors to exclude from clickoutside (e.g. remote hamburger DOM toggle element in MoreMenu)
 */
export const useClickOutside = (ref, onClickOutside, ignoredDomSelectors=[]) => {
    useEffect(() => {
        
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                const isIgnoredDomSelector = ignoredDomSelectors.find((ignoredDomSelector) =>{
                    const domElement = document.querySelector(ignoredDomSelector);
                    return (domElement.contains(event.target));
                });

                if (!isIgnoredDomSelector && (typeof onClickOutside === 'function')) {
                    onClickOutside();
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}