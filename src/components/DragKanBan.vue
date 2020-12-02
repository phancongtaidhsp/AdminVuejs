<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col form-inline">
                <input v-model="newTask" 
                placeholder="Enter new Task"
                class="input-group-text"
                @keyup.enter="add">
                <button class="ml-2 btn btn-primary"  @click="add">Add</button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col md-3">
                <div class="p-2 alert alert-secondary">
                    <h3>Backlog</h3>
                    <draggable class="list-group kanban-column" :list="arrBacklog" group="tasks" @end="onEnd">
                        <div class="list-group-item" v-for="element in arrBacklog" :key="element.name">
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
            </div>

            <div class="col md-3">
                <div class="p-2 alert alert-primary">
                    <h3>In Progress</h3>
                    <draggable class="list-group kanban-column" :list="arrInprogress" group="tasks" @end="onEnd">
                        <div class="list-group-item" v-for="element in arrInprogress" :key="element.name">
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
            </div>

            <div class="col md-3">
                <div class="p-2 alert alert-warning">
                    <h3>Tested</h3>
                    <draggable class="list-group kanban-column" :list="arrTested" group="tasks" @end="onEnd">
                        <div class="list-group-item" v-for="element in arrTested" :key="element.name">
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
            </div>

            <div class="col md-3">
                <div class="p-2 alert alert-success">
                    <h3>Done</h3>
                    <draggable class="list-group kanban-column" :list="arrDone" group="tasks" @end="onEnd">
                        <div class="list-group-item" v-for="element in arrDone" :key="element.name">
                            {{ element.name }}
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
        <p> OldID: <strong> {{ oldIndex}}</strong></p>
        <p> NewID: <strong> {{ newIndex}}</strong></p>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "",
  components: {
    draggable,
  },
  created: function(){
    this.arrBacklog = JSON.parse(localStorage.getItem('arrBacklog')) ? JSON.parse(localStorage.getItem('arrBacklog')) : this.arrBacklog;
    this.arrInprogress = JSON.parse(localStorage.getItem('arrInprogress')) ? JSON.parse(localStorage.getItem('arrInprogress')) : this.arrInprogress;
    this.arrTested = JSON.parse(localStorage.getItem('arrTested')) ? JSON.parse(localStorage.getItem('arrTested')) : this.arrTested;
    this.arrDone = JSON.parse(localStorage.getItem('arrDone')) ? JSON.parse(localStorage.getItem('arrDone')) : this.arrDone;
    if(JSON.parse(localStorage.getItem('oldIndex')) == '0') this.oldIndex = '0'
    else this.oldIndex = JSON.parse(localStorage.getItem('oldIndex')) ? JSON.parse(localStorage.getItem('oldIndex')) : this.oldIndex;
    if(JSON.parse(localStorage.getItem('newIndex')) == '0') this.newIndex = '0'
    else this.newIndex = JSON.parse(localStorage.getItem('newIndex')) ? JSON.parse(localStorage.getItem('newIndex')) : this.newIndex;
  },
  data() {
      return {
          newTask: "",
          arrBacklog: [
              {name: "Code Sign Up Page"},
              {name: "Test Dashboard"},
              {name: "Style Registation"},
              {name: "Help with Designs"}
            ],
          arrInprogress: [],
          arrTested: [],
          arrDone: [],
          oldIndex: "",
          newIndex: "",
      }
  },
  methods: {
      add() {
          if(this.newTask) {
              this.arrBacklog.push({name: this.newTask});
              this.newTask = "";
          }
      },
      onEnd: function (evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
      localStorage.setItem('arrBacklog', JSON.stringify(this.arrBacklog));
      localStorage.setItem('arrInprogress', JSON.stringify(this.arrInprogress));
      localStorage.setItem('arrTested', JSON.stringify(this.arrTested));
      localStorage.setItem('arrDone', JSON.stringify(this.arrDone));
      localStorage.setItem('oldIndex', JSON.stringify(this.oldIndex));
      localStorage.setItem('newIndex', JSON.stringify(this.newIndex));
    },
  }
}
</script>

<style>
.kanban-column{
    min-height: 300px;
}
</style>
