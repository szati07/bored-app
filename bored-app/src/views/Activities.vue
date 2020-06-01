<template>
  <b-container class="activities">
    <b-form>
      <b-row>
        <b-col>
         <h4>You should:</h4>
         <b-form-textarea
            id="textarea"
            placeholder="Enter something..."
            size="lg"
          ></b-form-textarea>
          <b-button block variant="danger">Button</b-button>
        </b-col>
        <b-col>
          <h4>Activity details:</h4>
           <b-form-group
            id="fieldset-1"
            label="Type"
            label-for="type"
          >
            <b-form-select id="type"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-2"
            label="Participants"
            label-for="participants"
          >
            <b-form-select id="participants"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-3"
            label="Budget"
            label-for="budget"
          >
            <b-form-input :type="'range'" id="budget"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>

export default {
  name: 'Activities',
  components: {
  },
};
</script>
