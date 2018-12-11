import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';



export const inputs: string[] = ['enableBookmarkDialog','enableBordersAndShadingDialog','enableContextMenu','enableEditor','enableEditorHistory','enableFontDialog','enableHyperlinkDialog','enableImageResizer','enableListDialog','enableOptionsPane','enablePageSetupDialog','enableParagraphDialog','enablePersistence','enablePrint','enableRtl','enableSearch','enableSelection','enableSfdtExport','enableStyleDialog','enableTableDialog','enableTableOfContentsDialog','enableTableOptionsDialog','enableTablePropertiesDialog','enableTextExport','enableWordExport','isReadOnly','locale','zoomFactor'];
export const outputs: string[] = ['contentChange','created','destroyed','documentChange','keyDown','requestNavigate','searchResultsChange','selectionChange','viewChange','zoomFactorChange'];
export const twoWays: string[] = [];

/**
 * `ejs-documenteditor` represents the Angular Document Editor Component.
 * ```html
 * <ejs-documenteditor isReadOnly='true' enableSelection='true'></ejs-documenteditor>
 * ```
 */
@Component({
    selector: 'ejs-documenteditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class DocumentEditorComponent extends DocumentEditor implements IComponentBase {




    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('DocumentEditorPrint')); }catch {} 


























        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}
