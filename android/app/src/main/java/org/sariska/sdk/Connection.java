package org.sariska.sdk;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactFragment;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

class Connection extends ReactContextBaseJavaModule {

    private final List<ConnectionBinding> bindings = new ArrayList<>();

    Connection(ReactApplicationContext context) {
        super(context);
    }

    public Connection(String token) {
        BroadcastNativeEvent.sendEvent("CREATE_CONNECTION", Params.createConnection(token));
    }

    @Override
    public String getName() {
        return "Connection";
    }

    @ReactMethod
    public void newConnectionMessage(String action) {
        synchronized (bindings) {
            for (final ConnectionBinding binding : bindings) {
                if (binding.getEvent().equals(action)) {
                    binding.getCallback().onMessage();
                    break;
                }
            }
        }
    }

    public Conference initJitsiConference() {
        return new Conference();
    }

    public void connect() {
        BroadcastNativeEvent.sendEvent("CONNECTION_ACTION", Params.createParams("connect"));
    }

    public void disconnect() {
        BroadcastNativeEvent.sendEvent("CONNECTION_ACTION", Params.createParams("disconnect"));
    }

    public void addFeature() {
        BroadcastNativeEvent.sendEvent("CONNECTION_ACTION", Params.createParams("addFeature"));
    }

    public void removeFeature() {
        BroadcastNativeEvent.sendEvent("CONNECTION_ACTION", Params.createParams("removeFeature"));
    }

    public Connection removeEventListener(final String event) {
        synchronized (bindings) {
            for (final Iterator<ConnectionBinding> bindingIter = bindings.iterator();
                 bindingIter.hasNext(); ) {
                if (bindingIter.next().getEvent().equals(event)) {
                    bindingIter.remove();
                    break;
                }
            }
        }
        return this;
    }

    public Connection addEventListener(final String event, final ConnectionCallback callback) {
        synchronized (bindings) {
            this.bindings.add(new ConnectionBinding(event, callback));
        }
        return this;
    }
}
