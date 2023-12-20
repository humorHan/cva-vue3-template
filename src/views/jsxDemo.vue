<script lang="jsx">
export default {
  setup(props, { slots }) {
    return {
      slots,
    };
  },
  render() {
    return <h1>{this.slots.default && this.slots.default()}</h1>;
  },
};
</script>
