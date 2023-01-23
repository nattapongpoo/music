import type * as HLS from 'hls.js';
import type { DOMEvent } from 'maverick.js/std';

import type { VideoProviderEvents } from '../video/types';
import type { HLSVideoElement } from './types';

export interface HLSProviderEvents extends VideoProviderEvents {
  'lib-load-start': HLSLibLoadStartEvent;
  'lib-loaded': HLSLibLoadedEvent;
  'lib-load-error': HLSLibLoadErrorEvent;
  instance: HLSInstanceEvent;
  unsupported: HLSUnsupportedEvent;
  // re-dispatched `hls.js` events below
  'media-attaching': HLSMediaAttachingEvent;
  'media-attached': HLSMediaAttachedEvent;
  'media-detaching': HLSMediaDetachingEvent;
  'media-detached': HLSMediaDetachedEvent;
  'buffer-reset': HLSBufferResetEvent;
  'buffer-codecs': HLSBufferCodecsEvent;
  'buffer-created': HLSBufferCreatedEvent;
  'buffer-appending': HLSBufferAppendingEvent;
  'buffer-appended': HLSBufferAppendedEvent;
  'buffer-eos': HLSBufferEosEvent;
  'buffer-flushing': HLSBufferFlushingEvent;
  'buffer-flushed': HLSBufferFlushedEvent;
  'manifest-loading': HLSManifestLoadingEvent;
  'manifest-loaded': HLSManifestLoadedEvent;
  'manifest-parsed': HLSManifestParsedEvent;
  'level-switching': HLSLevelSwitchingEvent;
  'level-switched': HLSLevelSwitchedEvent;
  'level-loading': HLSLevelLoadingEvent;
  'level-loaded': HLSLevelLoadedEvent;
  'level-updated': HLSLevelUpdatedEvent;
  'level-pts-updated': HLSLevelPtsUpdatedEvent;
  'levels-updated': HLSLevelsUpdatedEvent;
  'audio-tracks-updated': HLSAudioTracksUpdatedEvent;
  'audio-track-switching': HLSAudioTrackSwitchingEvent;
  'audio-track-switched': HLSAudioTrackSwitchedEvent;
  'audio-track-loading': HLSAudioTrackLoadingEvent;
  'audio-track-loaded': HLSAudioTrackLoadedEvent;
  'subtitle-tracks-updated': HLSSubtitleTracksUpdatedEvent;
  'subtitle-tracks-cleared': HLSSubtitleTracksClearedEvent;
  'subtitle-track-switch': HLSSubtitleTrackSwitchEvent;
  'subtitle-track-loading': HLSSubtitleTrackLoadingEvent;
  'subtitle-track-loaded': HLSSubtitleTrackLoadedEvent;
  'subtitle-frag-processed': HLSSubtitleFragProcessedEvent;
  'cues-parsed': HLSCuesParsedEvent;
  'non-native-text-tracks-found': HLSNonNativeTextTracksFoundEvent;
  'init-pts-found': HLSInitPtsFoundEvent;
  'frag-loading': HLSFragLoadingEvent;
  'frag-load-emergency-aborted': HLSFragLoadEmergencyAbortedEvent;
  'frag-loaded': HLSFragLoadedEvent;
  'frag-decrypted': HLSFragDecryptedEvent;
  'frag-parsing-init-segment': HLSFragParsingInitSegmentEvent;
  'frag-parsing-userdata': HLSFragParsingUserdataEvent;
  'frag-parsing-metadata': HLSFragParsingMetadataEvent;
  'frag-parsed': HLSFragParsedEvent;
  'frag-buffered-data': HLSFragBufferedDataEvent;
  'frag-changed': HLSFragChangedEvent;
  'fps-drop': HLSFpsDropEvent;
  'fps-drop-level-capping': HLSFpsDropLevelCappingEvent;
  error: HLSErrorEvent;
  destroying: HLSDestroyingEvent;
  'key-loading': HLSKeyLoadingEvent;
  'key-loaded': HLSKeyLoadedEvent;
  'back-buffer-reached': HLSBackBufferReachedEvent;
}

export interface HLSMediaEvent<DetailType = unknown> extends DOMEvent<DetailType> {
  target: HLSVideoElement;
}

/**
 * Fired when the browser begins downloading the `hls.js` library.
 */
export interface HLSLibLoadStartEvent extends HLSMediaEvent<void> {}

/**
 * Fired when the `hls.js` library has been loaded.
 */
export interface HLSLibLoadedEvent extends HLSMediaEvent<typeof HLS.default> {}

/**
 * Fired when the `hls.js` library fails during the download process.
 */
export interface HLSLibLoadErrorEvent extends HLSMediaEvent<Error> {}

/**
 * Fired when the `hls.js` instance is built. This will not fire if the browser does not
 * support `hls.js`.
 */
export interface HLSInstanceEvent extends HLSMediaEvent<HLS.default> {}

/**
 * Fired when the browser doesn't support HLS natively, _and_ `hls.js` doesn't support
 * this environment either, most likely due to missing Media Extensions or video codecs.
 */
export interface HLSUnsupportedEvent extends HLSMediaEvent<void> {}

/**
 * Fired before `MediaSource` begins attaching to the media element.
 */
export interface HLSMediaAttachingEvent extends HLSMediaEvent<HLS.MediaAttachingData> {}

/**
 * Fired when `MediaSource` has been successfully attached to the media element.
 */
export interface HLSMediaAttachedEvent extends HLSMediaEvent<HLS.MediaAttachedData> {}

/**
 * Fired before detaching `MediaSource` from the media element.
 */
export interface HLSMediaDetachingEvent extends HLSMediaEvent<void> {}

/**
 * Fired when `MediaSource` has been detached from media element.
 */
export interface HLSMediaDetachedEvent extends HLSMediaEvent<void> {}

/**
 * Fired when we buffer is going to be reset.
 */
export interface HLSBufferResetEvent extends HLSMediaEvent<void> {}

/**
 * Fired when we know about the codecs that we need buffers for to push into.
 */
export interface HLSBufferCodecsEvent extends HLSMediaEvent<HLS.BufferCodecsData> {}

/**
 * Fired when `SourceBuffer`'s have been created.
 */
export interface HLSBufferCreatedEvent extends HLSMediaEvent<HLS.BufferCreatedData> {}

/**
 * Fired when we begin appending a media segment to the buffer.
 */
export interface HLSBufferAppendingEvent extends HLSMediaEvent<HLS.BufferAppendingData> {}

/**
 * Fired when we are done with appending a media segment to the buffer.
 */
export interface HLSBufferAppendedEvent extends HLSMediaEvent<HLS.BufferAppendedData> {}

/**
 * Fired when the stream is finished and we want to notify the media buffer that there will be no
 * more data.
 */
export interface HLSBufferEosEvent extends HLSMediaEvent<HLS.BufferEOSData> {}

/**
 * Fired when the media buffer should be flushed.
 */
export interface HLSBufferFlushingEvent extends HLSMediaEvent<HLS.BufferFlushingData> {}

/**
 * Fired when the media buffer has been flushed.
 */
export interface HLSBufferFlushedEvent extends HLSMediaEvent<HLS.BufferFlushedData> {}

/**
 * Fired to signal that manifest loading is starting.
 */
export interface HLSManifestLoadingEvent extends HLSMediaEvent<HLS.ManifestLoadingData> {}

/**
 * Fired after the manifest has been loaded.
 */
export interface HLSManifestLoadedEvent extends HLSMediaEvent<HLS.ManifestLoadedData> {}

/**
 * Fired after manifest has been parsed.
 */
export interface HLSManifestParsedEvent extends HLSMediaEvent<HLS.ManifestParsedData> {}

/**
 * Fired when a level switch is requested.
 */
export interface HLSLevelSwitchingEvent extends HLSMediaEvent<HLS.LevelSwitchingData> {}

/**
 * Fired when a level switch is effective.
 */
export interface HLSLevelSwitchedEvent extends HLSMediaEvent<HLS.LevelSwitchedData> {}

/**
 * Fired when a level playlist loading starts.
 */
export interface HLSLevelLoadingEvent extends HLSMediaEvent<HLS.LevelLoadingData> {}

/**
 * Fired when a level playlist loading finishes.
 */
export interface HLSLevelLoadedEvent extends HLSMediaEvent<HLS.LevelLoadedData> {}

/**
 * Fired when a level's details have been updated based on previous details, after it has been
 * loaded.
 */
export interface HLSLevelUpdatedEvent extends HLSMediaEvent<HLS.LevelUpdatedData> {}

/**
 * Fired when a level's PTS information has been updated after parsing a fragment.
 */
export interface HLSLevelPtsUpdatedEvent extends HLSMediaEvent<HLS.LevelPTSUpdatedData> {}

/**
 * Fired when a level is removed after calling `removeLevel()`.
 */
export interface HLSLevelsUpdatedEvent extends HLSMediaEvent<HLS.LevelsUpdatedData> {}

/**
 * Fired to notify that the audio track list has been updated.
 */
export interface HLSAudioTracksUpdatedEvent extends HLSMediaEvent<HLS.AudioTracksUpdatedData> {}

/**
 * Fired when an audio track switching is requested.
 */
export interface HLSAudioTrackSwitchingEvent extends HLSMediaEvent<HLS.AudioTrackSwitchingData> {}

/**
 * Fired when an audio track switch actually occurs.
 */
export interface HLSAudioTrackSwitchedEvent extends HLSMediaEvent<HLS.AudioTrackSwitchedData> {}

/**
 * Fired when loading an audio track starts.
 */
export interface HLSAudioTrackLoadingEvent extends HLSMediaEvent<HLS.TrackLoadingData> {}

/**
 * Fired when loading an audio track finishes.
 */
export interface HLSAudioTrackLoadedEvent extends HLSMediaEvent<HLS.AudioTrackLoadedData> {}

/**
 * Fired to notify that the subtitle track list has been updated.
 */
export interface HLSSubtitleTracksUpdatedEvent
  extends HLSMediaEvent<HLS.SubtitleTracksUpdatedData> {}

/**
 * Fired to notify that subtitle tracks were cleared as a result of stopping the media.
 */
export interface HLSSubtitleTracksClearedEvent extends HLSMediaEvent<void> {}

/**
 * Fired when a subtitle track switch occurs.
 */
export interface HLSSubtitleTrackSwitchEvent extends HLSMediaEvent<HLS.SubtitleTrackSwitchData> {}

/**
 * Fired when loading a subtitle track starts.
 */
export interface HLSSubtitleTrackLoadingEvent extends HLSMediaEvent<HLS.TrackLoadingData> {}

/**
 * Fired when loading a subtitle track finishes.
 */
export interface HLSSubtitleTrackLoadedEvent extends HLSMediaEvent<HLS.SubtitleTrackLoadedData> {}

/**
 * Fired when a subtitle fragment has been processed.
 */
export interface HLSSubtitleFragProcessedEvent
  extends HLSMediaEvent<HLS.SubtitleFragProcessedData> {}

/**
 * Fired when a set of `VTTCue`'s to be managed externally has been parsed.
 */
export interface HLSCuesParsedEvent extends HLSMediaEvent<HLS.CuesParsedData> {}

/**
 * Fired when a text track to be managed externally is found.
 */
export interface HLSNonNativeTextTracksFoundEvent
  extends HLSMediaEvent<HLS.NonNativeTextTracksData> {}

/**
 * Fired when the first timestamp is found.
 */
export interface HLSInitPtsFoundEvent extends HLSMediaEvent<HLS.InitPTSFoundData> {}

/**
 * Fired when loading a fragment starts.
 */
export interface HLSFragLoadingEvent extends HLSMediaEvent<HLS.FragLoadingData> {}

/**
 * Fired when fragment loading is aborted for emergency switch down.
 */
export interface HLSFragLoadEmergencyAbortedEvent
  extends HLSMediaEvent<HLS.FragLoadEmergencyAbortedData> {}

/**
 * Fired when fragment loading is completed.
 */
export interface HLSFragLoadedEvent extends HLSMediaEvent<HLS.FragLoadedData> {}

/**
 * Fired when a fragment has finished decrypting.
 */
export interface HLSFragDecryptedEvent extends HLSMediaEvent<HLS.FragDecryptedData> {}

/**
 * Fired when `InitSegment` has been extracted from a fragment.
 */
export interface HLSFragParsingInitSegmentEvent
  extends HLSMediaEvent<HLS.FragParsingInitSegmentData> {}

/**
 * Fired when parsing sei text is completed.
 */
export interface HLSFragParsingUserdataEvent extends HLSMediaEvent<HLS.FragParsingUserdataData> {}

/**
 * Fired when parsing id3 is completed.
 */
export interface HLSFragParsingMetadataEvent extends HLSMediaEvent<HLS.FragParsingMetadataData> {}

/**
 * Fired when fragment parsing is completed.
 */
export interface HLSFragParsedEvent extends HLSMediaEvent<HLS.FragParsedData> {}

/**
 * Fired when fragment remuxed MP4 boxes have all been appended into `SourceBuffer`.
 */
export interface HLSFragBufferedDataEvent extends HLSMediaEvent<HLS.FragBufferedData> {}

/**
 * Fired when fragment matching with current media position is changing.
 */
export interface HLSFragChangedEvent extends HLSMediaEvent<HLS.FragChangedData> {}

/**
 * Fired when a FPS drop is identified.
 */
export interface HLSFpsDropEvent extends HLSMediaEvent<HLS.FPSDropData> {}

/**
 * Fired when FPS drop triggers auto level capping.
 */
export interface HLSFpsDropLevelCappingEvent extends HLSMediaEvent<HLS.FPSDropLevelCappingData> {}

/**
 * Fired when an error has occurred during loading or playback.
 */
export interface HLSErrorEvent extends HLSMediaEvent<HLS.ErrorData> {}

/**
 * Fired when the `hls.js` instance is being destroyed. Different from `hls-media-detached` as
 * one could want to detach, and reattach media to the `hls.js` instance to handle mid-rolls.
 */
export interface HLSDestroyingEvent extends HLSMediaEvent<void> {}

/**
 * Fired when a decrypt key loading starts.
 */
export interface HLSKeyLoadingEvent extends HLSMediaEvent<HLS.KeyLoadingData> {}

/**
 * Fired when a decrypt key has been loaded.
 */
export interface HLSKeyLoadedEvent extends HLSMediaEvent<HLS.KeyLoadedData> {}

/**
 * Fired when the back buffer is reached as defined by the `backBufferLength` config option.
 */
export interface HLSBackBufferReachedEvent extends HLSMediaEvent<HLS.BackBufferData> {}
