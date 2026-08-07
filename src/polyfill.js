import 'invokers-polyfill';

const polyfillDialogCommands = () => {
  if (typeof window === 'undefined') return;

  const openDialog = (dialog) => {
    if (dialog?.tagName?.toLowerCase() === 'dialog' && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  };

  const closeDialog = (dialog) => {
    if (dialog?.tagName?.toLowerCase() === 'dialog' && typeof dialog.close === 'function') {
      dialog.close();
    }
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const command = target.getAttribute('command');
    const commandFor = target.getAttribute('commandfor') || target.getAttribute('commandFor');

    if (!command || !commandFor) return;

    const dialog = document.getElementById(commandFor);

    if (command === 'show-modal') {
      openDialog(dialog);
    }

    if (command === 'close') {
      closeDialog(dialog);
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', polyfillDialogCommands);
} else {
  polyfillDialogCommands();
}
