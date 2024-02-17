<script>
  import '@ui5/webcomponents/dist/Button.js';
  import '@ui5/webcomponents/dist/Input.js';
  import '@ui5/webcomponents-icons/dist/AllIcons.js';
  import '@ui5/webcomponents-icons-tnt/dist/AllIcons.js';
  import '@ui5/webcomponents-icons-business-suite/dist/AllIcons.js';

  function warn() {
    alert('Warning!');
  }
</script>

<div>
  Button in Svelte:
  <ui5-button icon="add" on:click={warn}>with Add Icon</ui5-button>
</div>
