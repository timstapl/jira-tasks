'use babel';

import JiraTasksView from './jira-tasks-view';
import { CompositeDisposable } from 'atom';

export default {

  jiraTasksView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.jiraTasksView = new JiraTasksView(state.jiraTasksViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.jiraTasksView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'jira-tasks:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.jiraTasksView.destroy();
  },

  serialize() {
    return {
      jiraTasksViewState: this.jiraTasksView.serialize()
    };
  },

  toggle() {
    console.log('JiraTasks was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
