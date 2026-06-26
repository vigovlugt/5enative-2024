{
  description = "Dev shell for the 5enative-2024 Expo (Android) app using bun";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
            android_sdk.accept_license = true;
          };
        };

        # Versions aligned with React Native 0.85 / Expo SDK 56.
        buildToolsVersion = "36.0.0";
        platformVersion = "36";
        ndkVersion = "27.1.12297006";
        cmakeVersion = "3.22.1";

        androidComposition = pkgs.androidenv.composeAndroidPackages {
          platformVersions = [ platformVersion ];
          buildToolsVersions = [ "35.0.0" buildToolsVersion ];
          ndkVersions = [ ndkVersion ];
          cmakeVersions = [ cmakeVersion ];
          includeNDK = true;
          includeEmulator = false;
          includeSystemImages = false;
        };

        androidSdk = androidComposition.androidsdk;
        androidSdkRoot = "${androidSdk}/libexec/android-sdk";
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.bun
            pkgs.nodejs_22
            pkgs.jdk17
            androidSdk
          ];

          JAVA_HOME = "${pkgs.jdk17}";
          ANDROID_HOME = androidSdkRoot;
          ANDROID_SDK_ROOT = androidSdkRoot;
          ANDROID_NDK_ROOT = "${androidSdkRoot}/ndk/${ndkVersion}";

          # Use the prebuilt aapt2 from the Nix-provided build-tools instead of
          # the one Gradle tries to download (which fails on NixOS).
          GRADLE_OPTS = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${androidSdkRoot}/build-tools/${buildToolsVersion}/aapt2";

          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            echo "Expo Android dev shell ready (bun $(bun --version), node $(node --version))"
          '';
        };
      });
}
