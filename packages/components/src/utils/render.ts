/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

// borrowed from @headlessui/react from here
// https://github.com/tailwindlabs/headlessui/blob/d4a94cb5647d9e11ffc72d92033d43cbc3361da7/packages/%40headlessui-react/src/utils/render.ts#L342
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
export function forwardRefWithAs<T extends { name: string; displayName?: string }>(
    component: T,
): T & { displayName: string } {
    return Object.assign(forwardRef(component as unknown as any) as any, {
        displayName: component.displayName ?? component.name,
    });
}
