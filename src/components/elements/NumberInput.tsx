import { component$, Slot } from '@builder.io/qwik';

import { InMinus, InPlus } from '@qwikest/icons/iconoir';

export default component$(({ id, value, input, onInput$, onDecrement$, onIncrement$, min, max, step }: any) => {
  return (
    <div class="flex flex-col mb-3">
      <label for={id} class="mb-2">
        <Slot />
      </label>
      <RawNumberInput id={id} value={value} input={input} onInput$={onInput$} onDecrement$={onDecrement$} onIncrement$={onIncrement$} min={min} max={max} step={step} />
    </div>
  );
});

export const RawNumberInput = component$(({ id, value, input, onInput$, onDecrement$, onIncrement$, min, max, step }: any) => {
  return (
    <div class={`flex ${input ? '' : 'gap-2'}`}>
      <button data-action="decrement" disabled={value <= min} onClick$={onDecrement$} class={`flex justify-center items-center transition ease-in-out bg-gray-${input ? 700 : 800} text-white text-2xl hover:bg-gray-${input ? 500 : 700} h-full py-1.5 ${input ? 'w-20 rounded-l-md' : 'w-[50%] rounded-md'} cursor-pointer`}>
        <InMinus />
      </button>
      {
        input && <input type="number" id={id} value={value} onInput$={onInput$} min={min} max={max} step={step} class="transition ease-in-out text-lg text-center bg-gray-800 text-gray-50 hover:bg-gray-600 focus:bg-gray-700 px-3 py-2 w-[calc(100%-10rem)]" />
      }
      <button data-action="increment" disabled={value >= max} onClick$={onIncrement$} class={`flex justify-center items-center transition ease-in-out bg-gray-${input ? 700 : 800} text-white text-2xl hover:bg-gray-${input ? 500 : 700} h-full py-1.5 ${input ? 'w-20 rounded-r-md' : 'w-[50%] rounded-md'} cursor-pointer`}>
        <InPlus />
      </button>
    </div>
  );
});