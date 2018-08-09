import { View } from 'ui/core/view';

declare var TVIVideoView, UIViewContentMode;

export class LocalVideo extends View {

    localVideoView: any;
    _videoViewDelegate: any; 
    nativeView: any;
    
    constructor() {
        super();
        this.localVideoView = TVIVideoView.alloc().init();
        this.localVideoView.mirror = true;
        this.localVideoView.contentMode = UIViewContentMode.ScaleAspectFill;
    }

    public createNativeView(): any {
        
        return this.localVideoView;

    }

    public disposeNativeView(): void {
        
        this.nativeView = null;

    }

}
