import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = Exclude<Exclude<React.ComponentProps<typeof CSSTransition>, 'in'>, 'appear'>  & {
    className?: string;
}

export const TransitionNullable: React.FC<Props> = ({ className, children, ...props }) => {
    const [childrenCopy, setChildrenCopy] = useState<typeof children>(null);
    const persistentChildren: typeof children = children || childrenCopy;

    useEffect(() => {
        if (children) {
            setChildrenCopy(children);
        }
    }, [children]);

    function handleExited(el: HTMLElement) {
        props.onExited && props.onExited(el);

        setChildrenCopy(null);
    }

    if (persistentChildren) {
        return (
            <CSSTransition {...props} appear in={Boolean(children)} onExited={handleExited}>
                {persistentChildren}
            </CSSTransition>
        );
    }

    return null;
};
