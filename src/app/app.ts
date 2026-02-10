import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, AudioService, VideoService, AudioSettingsModel, ImageSettingsModel, RichTextEditorModule, VideoSettingsModel, ToolbarSettingsModel, EmojiPickerService } from '@syncfusion/ej2-angular-richtexteditor';
import { TabModule } from '@syncfusion/ej2-angular-navigations'

@Component({
  selector: 'app-root',
  imports: [RichTextEditorModule, TabModule],
  template:
    `
<ejs-tab>
  <e-tabitems>
    <e-tabitem>
      <ng-template #headerText>
        <div> Text Formatting </div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor  [toolbarSettings]='tools1'></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
    <e-tabitem>
      <ng-template #headerText>
        <div> Insert Media Options </div>
      </ng-template>
      <ng-template #content>
        <ejs-richtexteditor  [toolbarSettings]='tools2'></ejs-richtexteditor>
      </ng-template>
    </e-tabitem>
  </e-tabitems>
</ejs-tab>
    `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, AudioService, VideoService, EmojiPickerService],
})
export class App {
  public tools1: ToolbarSettingsModel = {
    items: [
      'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'BackgroundColor', 'FontColor', 'FontName']
  };
  public tools2: ToolbarSettingsModel = {
    items: ['Undo', 'Redo', '|', 'Image', 'Video', 'Audio', 'EmojiPicker']
  };
}
