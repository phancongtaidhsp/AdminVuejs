<template>
  <div class="DragSortTable">
    <h1>Fruits</h1>

    <draggable v-model="myArray" ghost-class="ghost" @end="onEnd">
          <transition-group type="transition" name="flip-list">
              <div class="sortable" 
                :id="element.id" 
                v-for="element in myArray" 
                :key="element.id">
                <strong>{{element.name}}</strong>
              </div>
          </transition-group>
      </draggable>
    <!-- <div class="draggable-wrap" id="drag"> 
      <draggable
        v-model="myArray"
        tag="transition-group"
        @end="onEnd"
        item-key="id">
        <template #item="{ element }">
          <div :key="element.id" class="element-item badge-pill">{{ element.name }}</div>
        </template>
      </draggable>
    </div> -->


    <p> OldID: <strong> {{ oldIndex}}</strong></p>
    <p> NewID: <strong> {{ newIndex}}</strong></p>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "DragSortTable",
  components: {
    draggable,
  },
  created: function(){
    this.myArray = JSON.parse(localStorage.getItem('myArray')) ? JSON.parse(localStorage.getItem('myArray')) : this.myArray;
    if(JSON.parse(localStorage.getItem('oldIndex')) == '0') this.oldIndex = '0'
    else this.oldIndex = JSON.parse(localStorage.getItem('oldIndex')) ? JSON.parse(localStorage.getItem('oldIndex')) : this.oldIndex;
    if(JSON.parse(localStorage.getItem('newIndex')) == '0') this.newIndex = '0'
    else this.newIndex = JSON.parse(localStorage.getItem('newIndex')) ? JSON.parse(localStorage.getItem('newIndex')) : this.newIndex;
  },
  data() {
    return {
      myArray: [
        { name: "Apple", id: 0 },
        { name: "Mango", id: 1 },
        { name: "Orange", id: 2 },
        { name: "Lemon", id: 3 },
      ],
      oldIndex: "",
      newIndex: "",
    };
  },
  methods: {
    onEnd: function (evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
      localStorage.setItem('myArray', JSON.stringify(this.myArray));
      localStorage.setItem('oldIndex', JSON.stringify(this.oldIndex));
      localStorage.setItem('newIndex', JSON.stringify(this.newIndex));
    },
  },
};
</script>

<style>
.element-item {
    background-color: rgb(44, 39, 39);
    padding: 0 5px;
    text-align: center;
    width: 200px;
    color: #fff;
    font-size: 1.4rem;
    margin-right: 10px;
}

.element-item:hover {
    cursor: pointer;
    background-color: rgb(82, 73, 73);
}

.draggable-wrap {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  padding: 5px;
  border: 1px solid #888;
}

.sortable {
  width: 100%;
  background: white;
  padding: 1em;
  cursor: move;
  margin-bottom: 2px;
}

.flip-list-move {
  transition: all 0.5s;
}

.ghost {
  border-left: 6px solid rgb(0,183,255);
  box-shadow: 10px 10px 5px -1px rgba(0,0,0,0.14);
  opacity: 0.7;
}




</style>