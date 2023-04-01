import { component$, Slot } from '@builder.io/qwik';

export default component$(({ label, id, value, placeholder, onChange$, extraClass }: any) => {
  return (
    <div class="flex flex-col">
      <label for={id} class="mb-2">
        {label}
      </label>
      <RawSelectInput id={id} value={value} placeholder={placeholder} onChange$={onChange$} extraClass={`mb-3 ${extraClass}`}>
        <Slot />
      </RawSelectInput>
    </div>
  );
});

export const RawSelectInput = component$(({ id, value, placeholder, onChange$, extraClass }: any) => {
  return (
    <select class={`transition ease-in-out text-lg bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-2 py-3 ${extraClass}`} id={id} value={value} placeholder={placeholder} onChange$={onChange$}>
      <Slot />
    </select>
  );
});