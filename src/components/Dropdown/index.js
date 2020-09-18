import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import { Scrollbars } from 'react-custom-scrollbars';

export const Dropdown = ({
    options,
    disabled,
    onOpen = () => {},
    onOptionClick = () => {},
    children,
}) => {
    const triggerRef = useRef(null);
    const scrollBoxRef = useRef(null);

    useEffect(() => {
        if (triggerRef.current) {
            M.Dropdown.init(triggerRef.current);

            triggerRef.current.addEventListener('click', () => {
                onOpen();

                // Workaround to show the scrollbar when the dropdown is opened
                if (scrollBoxRef.current) {
                    scrollBoxRef.current.scrollToBottom();
                    scrollBoxRef.current.scrollToTop();
                }
            });
        }
    }, [triggerRef, onOpen]);

    const id = 'dropdown' + performance.now();
    return (
        <>
            <a
                className="dropdown-trigger"
                data-target={id}
                ref={triggerRef}
                href="#!"
            >
                {children}
            </a>

            <ul id={id} className="dropdown-content">
                {!disabled && (
                    <Scrollbars
                        autoHeight={true}
                        renderTrackHorizontal={() => <i></i>}
                        ref={scrollBoxRef}
                    >
                        {options.map((option, idx) => (
                            <li key={idx}>
                                <a
                                    onClick={() => onOptionClick(option.value)}
                                    href="#!"
                                >
                                    {option.label}
                                </a>
                            </li>
                        ))}
                    </Scrollbars>
                )}
            </ul>
        </>
    );
};
